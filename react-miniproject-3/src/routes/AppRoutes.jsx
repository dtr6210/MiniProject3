import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import PageNotFound from "../pages/PageNotFound";
import SignupPage from "../pages/SignupPage";
import MainFeedPage from "../pages/MainFeedPage";
import MealDetailPage from "../pages/MealDetails";
import AboutPage from "../pages/AboutPage";
import CreatePostPage from "../pages/CreatePostPage";

//component to define all application routes
function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Homepage {...props} />} />
      <Route path="signup" element={<SignupPage {...props} />} />
      <Route path="main" element={<MainFeedPage {...props} />} />
      <Route path="about" element={<AboutPage {...props} />} />
      <Route path="meal/:mealId" element={<MealDetailPage {...props} />} />
      <Route path="create-post" element={<CreatePostPage {...props} />} />
      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
