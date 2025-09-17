import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return(
  <div className="min-h-screen bg-background overflow-x-hidden">

    {/* Theme Toggle */}
    <ThemeToggle/>
    {/* Background Effects */}
    <StarBackground/>
    {/* NavBar */}

    {/* Main Content */}

    {/* Footer */}
  </div>
  );
};