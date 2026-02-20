import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Tokushoho from "./pages/Tokushoho";
import AppLogin from "./pages/AppLogin";
import AppDashboard from "./pages/AppDashboard";
import AppMap from "./pages/AppMap";
import AppWater from "./pages/AppWater";
import AppRecords from "./pages/AppRecords";

/*
 * AuthGuard — 未ログインユーザーを /app/login にリダイレクト
 * NOTE: 現在は常に未認証として扱う（Supabase Auth未接続）
 */
function AuthGuard({ children }: { children: React.ReactNode }) {
  const isAuthenticated = false; // TODO: Supabase Auth接続後に実装
  if (!isAuthenticated) {
    return <Redirect to="/app/login" />;
  }
  return <>{children}</>;
}

function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  return (
    <AuthGuard>
      <Component />
    </AuthGuard>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/tokushoho" component={Tokushoho} />
      <Route path="/app/login" component={AppLogin} />
      <Route path="/app/dashboard">{() => <ProtectedRoute component={AppDashboard} />}</Route>
      <Route path="/app/map">{() => <ProtectedRoute component={AppMap} />}</Route>
      <Route path="/app/water">{() => <ProtectedRoute component={AppWater} />}</Route>
      <Route path="/app/records">{() => <ProtectedRoute component={AppRecords} />}</Route>
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
