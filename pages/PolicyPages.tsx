
import React from 'react';
import { Link } from 'react-router-dom';
import { POLICY_ROUTES } from '../constants';

interface PolicyPageProps {
  title: string;
  children: React.ReactNode;
  titleColorClass?: string; 
  borderColorClass?: string; 
}

const PolicyPageLayout: React.FC<PolicyPageProps> = ({ title, children, titleColorClass = 'text-sky-600', borderColorClass = 'border-slate-200' }) => {
  return (
    <div className={`max-w-4xl mx-auto p-6 md:p-10 bg-white rounded-xl shadow-2xl border-2 ${borderColorClass}`}>
      <h1 className={`text-3xl md:text-4xl font-bold text-center mb-8 ${titleColorClass}`}>{title}</h1>
      {/* Apply the 'defaultLight' prose style defined in tailwind.config for light backgrounds */}
      <div className="prose prose-defaultLight prose-lg max-w-none text-slate-700 space-y-6">
        {children}
      </div>
    </div>
  );
};

export const TermsOfServicePage: React.FC = () => (
  <PolicyPageLayout title="Terms of Service" titleColorClass="text-sky-700" borderColorClass="border-sky-400">
    <h2>1. Agreement to Terms</h2>
    <p>By accessing or using Certified Marketplace (the "Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Platform. These terms govern your access to and use of our services, including our website, mobile applications (the "App"), and any other online services we provide.</p>
    <h2>2. User Accounts</h2>
    <p>To access many features of the Platform, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. We reserve the right to suspend or terminate accounts that violate these Terms or for any other reason at our sole discretion.</p>
    <h2>3. Listing Rules</h2>
    <p>As a seller, you are responsible for the accuracy, content, and legality of your listings. Prohibited items include, but are not limited to, illegal goods, counterfeit products, hazardous materials, and any items that infringe upon third-party intellectual property rights. All images for listings must be taken directly via the Certified Marketplace mobile app's camera function. This is a security measure to enhance the authenticity of listings. We reserve the right to remove any listing that violates our policies or is otherwise deemed inappropriate, without prior notice.</p>
    <h2>4. Buying and Selling</h2>
    <p>Certified Marketplace serves as a platform to connect buyers and sellers. We are not a party to any transaction conducted between users. We do not own, inspect, or possess any of the items listed on the Platform. We do not guarantee the quality, safety, legality, or authenticity of items listed. Users are encouraged to communicate directly, ask questions, and exercise caution and good judgment in all transactions.</p>
    <h2>5. Fees and Payments</h2>
    <p>Basic use of Certified Marketplace, such as browsing listings, may be free. We may offer premium services, subscription plans, or fees for certain types of listings or enhanced visibility. All applicable fees will be clearly disclosed to you before you incur them. Payments for services or subscriptions are processed through secure third-party payment gateways. You agree to pay all fees and applicable taxes associated with your use of our paid services.</p>
    <h2>6. Intellectual Property</h2>
    <p>The Platform and its original content (excluding user-generated content), features, and functionality are and will remain the exclusive property of Certified Marketplace and its licensors. These are protected by copyright, trademark, and other laws of South Africa and foreign countries. User-generated content remains the property of the respective user; however, by posting content on the Platform, you grant Certified Marketplace a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform your content in connection with the Platform and Certified Marketplace's business.</p>
    <h2>7. Limitation of Liability</h2>
    <p>To the fullest extent permitted by applicable law, Certified Marketplace, its affiliates, officers, employees, agents, suppliers, or licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Platform; (ii) any conduct or content of any third party on the Platform; (iii) any content obtained from the Platform; or (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.</p>
    <h2>8. Governing Law</h2>
    <p>These Terms shall be governed by and construed in accordance with the laws of the Republic of South Africa, without regard to its conflict of law provisions. Any disputes arising from or relating to these Terms or your use of the Platform shall be subject to the exclusive jurisdiction of the courts of South Africa.</p>
    <h2>9. Amendments to Terms</h2>
    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Platform after those revisions become effective, you agree to be bound by the revised terms.</p>
    <h2>10. Contact Us</h2>
    <p>If you have any questions about these Terms, please contact us at [Your Contact Email or Link to Contact Page].</p>
  </PolicyPageLayout>
);

export const PrivacyPolicyPage: React.FC = () => (
  <PolicyPageLayout title="Privacy Policy" titleColorClass="text-sky-700" borderColorClass="border-sky-400">
    <h2>1. Introduction</h2>
    <p>Certified Marketplace ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and mobile application (collectively, the "Platform"), in compliance with the Protection of Personal Information Act (POPIA) of South Africa.</p>
    <h2>2. Information We Collect</h2>
    <p>We may collect personal information in the following ways:</p>
    <ul>
        <li><strong>Information You Provide Directly:</strong> This includes information you provide when you register for an account, create a listing, make a purchase, participate in surveys, or communicate with us or other users. Examples include your name, email address, phone number, physical address, and payment information.</li>
        <li><strong>Information Collected Automatically:</strong> When you access or use the Platform, we may automatically collect certain information, such as your IP address, device type, operating system, browser type, pages viewed, links clicked, and the dates and times of your visits.</li>
        <li><strong>Biometric Information (Facial Recognition Login):</strong> If you choose to use our facial recognition login feature via the mobile app, we will collect and process your biometric data (e.g., a facial scan or template). This is done with your explicit consent for the sole purpose of authenticating your identity and enhancing account security. We implement strict security measures to protect this sensitive data.</li>
        <li><strong>Images (Camera-Only Uploads):</strong> When you post a listing, images must be uploaded directly via the camera function within our mobile app. These images are collected and stored as part of your listing.</li>
    </ul>
    <h2>3. How We Use Your Information</h2>
    <p>We use the information we collect for various purposes, including to:</p>
    <ul>
        <li>Provide, operate, and maintain the Platform.</li>
        <li>Process transactions and send you related information, including confirmations and invoices.</li>
        <li>Manage your account and provide customer support.</li>
        <li>Improve, personalize, and expand our Platform and services.</li>
        <li>Communicate with you, including responding to your comments, questions, and requests.</li>
        <li>Send you technical notices, updates, security alerts, and support and administrative messages.</li>
        <li>Monitor and analyze trends, usage, and activities in connection with our Platform.</li>
        <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities and protect the rights and property of Certified Marketplace and others.</li>
        <li>Comply with legal obligations.</li>
    </ul>
    <h2>4. Data Sharing and Disclosure</h2>
    <p>We may share your personal information in the following situations:</p>
    <ul>
        <li><strong>With Other Users:</strong> As necessary to facilitate transactions and communication on the Platform (e.g., sharing contact information between a buyer and seller upon a completed transaction, with consent).</li>
        <li><strong>With Service Providers:</strong> We may share information with third-party vendors, consultants, and other service providers who perform services on our behalf (e.g., payment processors, data analytics providers, cloud hosting services). These providers are obligated to protect your information.</li>
        <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</li>
        <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
        <li><strong>With Your Consent:</strong> We may share your information for other purposes with your explicit consent.</li>
    </ul>
    <h2>5. Data Security</h2>
    <p>We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. This includes encryption, access controls, and secure storage solutions, especially for sensitive data like biometric information. However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
    <h2>6. Your Rights under POPIA</h2>
    <p>As a data subject in South Africa, you have certain rights under POPIA, including:</p>
    <ul>
        <li>The right to access your personal information.</li>
        <li>The right to request correction of inaccurate personal information.</li>
        <li>The right to request deletion of your personal information, subject to certain legal limitations.</li>
        <li>The right to object to the processing of your personal information.</li>
        <li>The right to withdraw consent at any time (where processing is based on consent).</li>
        <li>The right to lodge a complaint with the Information Regulator.</li>
    </ul>
    <p>To exercise these rights, please contact us using the contact details provided below.</p>
    <h2>7. Cookies and Tracking Technologies</h2>
    <p>We use cookies and similar tracking technologies to track activity on our Platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Platform.</p>
    <h2>8. Changes to This Privacy Policy</h2>
    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>
    <h2>9. Contact Us</h2>
    <p>If you have any questions about this Privacy Policy or our data practices, please contact us at [Your Privacy Contact Email or Link to Contact Page].</p>
    <p><em>Last updated: [Current Date]</em></p>
  </PolicyPageLayout>
);

export const ReturnPolicyPage: React.FC = () => (
  <PolicyPageLayout title="Return Policy" titleColorClass="text-slate-800" borderColorClass="border-slate-300">
    <h2>1. General Platform Policy</h2>
    <p>Certified Marketplace operates as a platform connecting buyers and sellers. While we strive to foster a trustworthy environment, the primary responsibility for returns, exchanges, and refunds for items purchased through the Platform lies with the individual sellers. Each seller is required to clearly state their own return and exchange policy within their product listings.</p>
    <h2>2. Buyer's Responsibility</h2>
    <p>Before making a purchase, buyers are strongly encouraged to:</p>
    <ul>
        <li>Carefully review the seller's stated return policy on the product listing page.</li>
        <li>Thoroughly read the item description and examine all product images. Remember that images for many listings are camera-verified via our mobile app to provide a more accurate representation.</li>
        <li>Communicate directly with the seller through the Certified Marketplace messaging system if you have any questions or require clarification about the item or their return policy prior to purchase.</li>
    </ul>
    <h2>3. Seller's Return Policy</h2>
    <p>Sellers on Certified Marketplace must provide a clear and understandable return policy for their listings. This policy should specify:</p>
    <ul>
        <li>The conditions under which returns or exchanges are accepted (e.g., item not as described, damaged during shipping (if seller arranged), wrong item sent).</li>
        <li>The timeframe within which a buyer must initiate a return or exchange request (e.g., 7 days from receipt).</li>
        <li>The process for initiating a return or exchange (e.g., contacting the seller through the platform).</li>
        <li>Who is responsible for the cost of return shipping.</li>
        <li>The form of resolution offered (e.g., full refund, partial refund, exchange, store credit).</li>
        <li>Any items that are non-returnable (e.g., custom-made items, certain digital products as per our Digital Product Policy).</li>
    </ul>
    <p>Sellers are expected to adhere to their stated return policies and comply with applicable South African consumer protection laws.</p>
    <h2>4. Initiating a Return or Exchange</h2>
    <p>If you need to return or exchange an item, you should first contact the seller directly through the Certified Marketplace messaging system, referencing your order details and explaining the reason for your request, in accordance with the seller's stated policy.</p>
    <h2>5. Dispute Resolution</h2>
    <p>If a dispute arises between a buyer and a seller regarding a return or exchange that cannot be resolved directly between them, Certified Marketplace may, at its sole discretion, offer assistance through a Buyer Protection Program or dispute resolution service (details of such programs, if implemented, will be outlined in separate policy documents). However, Certified Marketplace is not obligated to mediate or resolve all disputes and does not act as an arbitrator in most cases. Our primary role is to provide a platform for connection.</p>
    <h2>6. Digital Products</h2>
    <p>For returns and refunds related to digital products purchased on the Platform, please refer to our specific <Link to={POLICY_ROUTES.DIGITAL_PRODUCT}>Digital Product Policy</Link>.</p>
    <h2>7. Condition of Returned Items</h2>
    <p>If a return is accepted by the seller, the item should typically be returned in the same condition it was received, unless otherwise agreed with the seller (e.g., in cases of damage during initial shipping for which the seller is responsible).</p>
    <p>Certified Marketplace encourages fair and reasonable practices from both buyers and sellers to ensure a positive trading experience for all community members.</p>
  </PolicyPageLayout>
);

export const DigitalProductPolicyPage: React.FC = () => (
  <PolicyPageLayout title="Digital Product Policy" titleColorClass="text-slate-800" borderColorClass="border-slate-300">
    <p className="italic text-sm text-center mb-6">This policy specifically applies to digital products sold on Certified Marketplace. It may appear or be referenced during checkout if a digital file is in the customer’s cart.</p>
    <h2>1. Nature of Digital Products</h2>
    <p>Digital products available on Certified Marketplace include, but are not limited to, items such as e-books, software licenses, digital art, graphic templates, music files, video content, online course access, and other downloadable or electronically accessible content ("Digital Products"). These products are delivered electronically, and no physical item will be shipped.</p>
    <h2>2. Delivery of Digital Products</h2>
    <p>Upon successful completion and confirmation of your payment, Digital Products will typically be made available for download or access. The method of delivery will be specified by the seller and may include:</p>
    <ul>
        <li>A direct download link provided on the order confirmation page.</li>
        <li>A download link sent to your registered email address.</li>
        <li>Access through your user account dashboard on the Certified Marketplace platform.</li>
    </ul>
    <p>It is your responsibility to ensure you have the necessary software and hardware to access and use the Digital Product as described by the seller.</p>
    <h2>3. License and Usage Rights</h2>
    <p>When you purchase a Digital Product, you are typically purchasing a license to use that product, not ownership of the product itself. The terms of this license (e.g., for personal use, commercial use, single-user, multi-user) will be specified by the seller in the product listing. You agree to abide by all license terms and restrictions associated with any Digital Product you purchase. Unauthorized copying, sharing, distribution, resale, or modification of Digital Products is strictly prohibited unless explicitly permitted by the seller's license terms.</p>
    <h2>4. Refunds and Returns for Digital Products</h2>
    <p>Due to the intangible nature of Digital Products and their instant accessibility or downloadability, refunds or returns for Digital Products are generally very limited and are handled under the following conditions:</p>
    <ul>
        <li><strong>Non-Refundable Once Accessed/Downloaded:</strong> As a general rule, Digital Products are non-refundable once they have been accessed, downloaded, or the license key has been revealed, unless otherwise required by applicable South African consumer law.</li>
        <li><strong>Exceptions for Refunds:</strong> A refund may be considered by the seller on a case-by-case basis if:
            <ul>
                <li>The Digital Product is significantly not as described in the listing.</li>
                <li>The digital file is proven to be corrupted, non-functional, or inaccessible, and the seller is unable to provide a working version or solution within a reasonable timeframe after being notified by the buyer.</li>
                <li>There was an accidental duplicate purchase of the same Digital Product.</li>
            </ul>
        </li>
    </ul>
    <p>Buyers must contact the seller directly through the Certified Marketplace messaging system to discuss any issues with a Digital Product and to request a refund if they believe one of the exceptions applies. Sellers are expected to address such requests in accordance with their stated policy and applicable laws. Certified Marketplace does not directly process refunds for transactions between buyers and sellers but may provide dispute resolution assistance if outlined in a separate Buyer Protection Policy.</p>
    <h2>5. Technical Support</h2>
    <p>Sellers may offer technical support for their Digital Products. The availability and scope of such support will be indicated in the product listing. Certified Marketplace does not provide direct technical support for third-party Digital Products sold on the platform.</p>
    <h2>6. Intellectual Property</h2>
    <p>All Digital Products sold on Certified Marketplace, including their content and associated materials, remain the intellectual property of their respective creators, authors, or sellers. Your purchase grants you a license to use the Digital Product as specified by the seller and does not transfer any ownership of the intellectual property rights.</p>
    <p>If you have any questions regarding this Digital Product Policy, please contact the seller of the specific Digital Product or Certified Marketplace support for general platform inquiries.</p>
  </PolicyPageLayout>
);

export const CheckoutPolicyPage: React.FC = () => (
  <PolicyPageLayout title="Checkout Policies Summary" titleColorClass="text-sky-700" borderColorClass="border-sky-400">
    <p>Welcome to the Certified Marketplace checkout. This page provides a summary of key policies applicable as you complete your purchase. For comprehensive details, please refer to our full <Link to={POLICY_ROUTES.TERMS}>Terms of Service</Link>, <Link to={POLICY_ROUTES.PRIVACY}>Privacy Policy</Link>, <Link to={POLICY_ROUTES.RETURN}>Return Policy</Link>, and <Link to={POLICY_ROUTES.DIGITAL_PRODUCT}>Digital Product Policy</Link> (if applicable).</p>
    
    <h2>1. Your Order</h2>
    <p>By proceeding to checkout, you are making an offer to purchase the items in your cart from the respective seller(s) on the Certified Marketplace platform. Please review your order carefully, including item details, quantities, prices, and seller information before confirming.</p>

    <h2>2. Payment</h2>
    <p>We facilitate payments through secure, trusted third-party payment gateways. Accepted payment methods will be displayed during checkout (e.g., Credit/Debit Cards, EFT). All transactions are processed in South African Rand (ZAR). Full payment authorization is required at the time of order placement for your order to be processed. Certified Marketplace does not store your full payment card details.</p>
    
    <h2>3. Shipping (for Physical Goods)</h2>
    <p>If your order includes physical goods, shipping costs and estimated delivery times will be calculated and displayed at checkout. These are determined by the seller and vary based on the item, your location within South Africa, and the chosen shipping method. Please review the seller's specific shipping details and timelines provided in the listing or at checkout.</p>
    
    <h2>4. Order Cancellation</h2>
    <p>Order cancellations may be possible before an item has been shipped by the seller. The ability to cancel and any applicable conditions are subject to the individual seller's policy. To request a cancellation, please contact the seller directly through the Certified Marketplace messaging system as soon as possible.</p>
    
    <h2>5. Returns & Exchanges (for Physical Goods)</h2>
    <p>Return and exchange policies for physical goods are set by individual sellers on Certified Marketplace. We strongly advise you to review the seller's specific return policy, available on the product listing page, before completing your purchase. Certified Marketplace serves as a platform to connect buyers and sellers; sellers are responsible for handling returns and exchanges directly according to their stated policies and applicable South African consumer law.</p>
    
    <h2>6. Digital Products</h2>
    <p>If your cart contains digital products (e.g., e-books, software, downloadable files), these items are delivered electronically. Due to their nature, refunds for digital products are limited. Please refer to our full <Link to={POLICY_ROUTES.DIGITAL_PRODUCT}>Digital Product Policy</Link> for detailed information on licenses, delivery, and refund conditions for such items.</p>
    
    <h2>7. Taxes (VAT)</h2>
    <p>All prices for goods and services displayed on Certified Marketplace are inclusive of Value Added Tax (VAT) at the current South African rate of 15%, unless explicitly stated otherwise by the seller. The total price, including VAT and any shipping costs, will be clearly itemized at checkout.</p>
    
    <h2>8. Security & Privacy Commitment</h2>
    <p>We are committed to protecting your personal and financial information. All transactions on Certified Marketplace are secured using SSL encryption technology. For detailed information on how we collect, use, store, and protect your data, please review our comprehensive <Link to={POLICY_ROUTES.PRIVACY}>Privacy Policy</Link>.</p>
    
    <h2>9. Policy Agreement Checkbox</h2>
    <p>Before you can place your order, you will be required to actively acknowledge and agree to all applicable Certified Marketplace policies, including our <Link to={POLICY_ROUTES.TERMS}>Terms of Service</Link>, <Link to={POLICY_ROUTES.PRIVACY}>Privacy Policy</Link>, and other relevant guidelines. This is done by checking the designated agreement box. Please ensure you have read and understood these policies.</p>
    
    <h2>10. Contact and Support</h2>
    <p>If you have questions about a specific item or a seller's policies, please contact the seller directly via the platform's messaging system. For general inquiries regarding the Certified Marketplace platform or these checkout policies, please visit our Help Center or Contact Us page.</p>
    
    <p>Thank you for using Certified Marketplace! We hope you have a secure and positive trading experience.</p>
  </PolicyPageLayout>
);
