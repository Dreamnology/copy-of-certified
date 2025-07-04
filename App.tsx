
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { BrowseAllPage } from './pages/BrowseAllPage';
import { CategoryPage } from './pages/CategoryPage';
import { ServicesHelpPage } from './pages/ServicesHelpPage';
import { PropertyVehiclesPage } from './pages/PropertyVehiclesPage';
import { CommunityItemsPage } from './pages/CommunityItemsPage';
import { JobsBusinessPage } from './pages/JobsBusinessPage';
import { SubscriptionsPage } from './pages/SubscriptionsPage';
import { PostAdPage } from './pages/PostAdPage';
import { LoginPage } from './pages/LoginPage';
import { CategoriesListPage } from './pages/CategoriesListPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { TermsOfServicePage, PrivacyPolicyPage, ReturnPolicyPage, DigitalProductPolicyPage, CheckoutPolicyPage } from './pages/PolicyPages';
import { APP_ROUTES, POLICY_ROUTES } from './constants';


const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path={APP_ROUTES.HOME} element={<HomePage />} />
          <Route path={APP_ROUTES.BROWSE_ALL} element={<BrowseAllPage />} />
          <Route path={`${APP_ROUTES.CATEGORY}/:categoryName`} element={<CategoryPage />} />
          <Route path={APP_ROUTES.CATEGORIES_LIST} element={<CategoriesListPage />} />
          <Route path={APP_ROUTES.SERVICES_HELP} element={<ServicesHelpPage />} />
          <Route path={APP_ROUTES.PROPERTY_VEHICLES} element={<PropertyVehiclesPage />} />
          <Route path={APP_ROUTES.COMMUNITY_ITEMS} element={<CommunityItemsPage />} />
          <Route path={APP_ROUTES.JOBS_BUSINESS} element={<JobsBusinessPage />} />
          <Route path={APP_ROUTES.SUBSCRIPTIONS} element={<SubscriptionsPage />} />
          <Route path={APP_ROUTES.POST_AD} element={<PostAdPage />} />
          <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={APP_ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={APP_ROUTES.CONTACT} element={<ContactPage />} />
          <Route path={POLICY_ROUTES.TERMS} element={<TermsOfServicePage />} />
          <Route path={POLICY_ROUTES.PRIVACY} element={<PrivacyPolicyPage />} />
          <Route path={POLICY_ROUTES.RETURN} element={<ReturnPolicyPage />} />
          <Route path={POLICY_ROUTES.DIGITAL_PRODUCT} element={<DigitalProductPolicyPage />} />
          <Route path={POLICY_ROUTES.CHECKOUT} element={<CheckoutPolicyPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
