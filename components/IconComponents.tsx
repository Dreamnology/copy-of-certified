import React from 'react';

// Generic Icon Props
interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const MenuIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z" />
  </svg>
);

export const PlayStoreIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3 20.517C3 21.267 3.718 21.78 4.319 21.419L13.612 16.12C14.753 15.442 14.753 13.76 13.612 13.082L4.319 7.783C3.718 7.421 3 7.934 3 8.684V20.517Z M15.243 12.579L5.028 6.743C3.927 6.087 3.067 6.963 3.067 8.177V21.025C3.067 22.239 3.927 23.115 5.028 22.459L15.243 16.623C16.307 15.994 17.028 15.273 17.028 14.601C17.028 13.929 16.307 13.208 15.243 12.579Z M20.972 14.099L17.538 15.816C17.233 15.964 17.028 15.762 17.028 15.212V13.99C17.028 13.44 17.233 13.238 17.538 13.386L20.972 15.103C21.631 15.424 21.631 16.412 20.972 16.733V14.099Z"/>
  </svg>
);

export const AppleStoreIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.203 10.909c-.527-2.454-2.61-4.189-4.993-4.215-1.932 0-3.613 1.042-4.609 2.611-.949-1.617-2.703-2.66-4.657-2.66-2.702 0-4.938 2.236-4.938 4.938 0 1.041.319 2.035.895 2.885.048.074.096.149.149.223.396.571.843 1.141 1.338 1.711.742.843 1.581 1.734 2.611 2.753 1.03.971 2.108 1.94 3.325 2.702.272.173.593.272.92.272.328 0 .648-.099.92-.272 1.217-.762 2.295-1.731 3.325-2.702 1.03-.995 1.87-1.91 2.611-2.753.521-.595.969-1.165 1.338-1.711.048-.074.096-.149.149-.223.598-.894.894-1.892.894-2.885 0-1.008-.379-2.097-.894-2.911zm-8.683 7.025c-.272.791-.645 1.533-1.114 2.18-.47.648-1.039 1.19-1.66 1.581-.173.124-.372.173-.57.173-.173 0-.372-.048-.521-.149-.648-.421-1.217-.969-1.686-1.581-.47-.648-.843-1.389-1.114-2.18-.272-.791-.396-1.636-.396-2.513 0-1.03.347-2.006.992-2.777.648-.791 1.508-1.24 2.465-1.24.958 0 1.817.449 2.465 1.24.645.771.992 1.747.992 2.777.001.877-.123 1.722-.397 2.513zM17.148 9.33c-.048-.048-.096-.096-.149-.124-.791-.47-1.66-.742-2.561-.742-.958 0-1.842.322-2.561.843-.742.521-1.217 1.291-1.364 2.156h7.785c-.148-.865-.623-1.635-1.364-2.156a5.07 5.07 0 00-.786-.123z"/>
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2.04C6.48 2.04 2 6.52 2 12.08C2 17.1 5.66 21.22 10.44 21.96V14.3H7.9V12.08H10.44V10.26C10.44 7.92 11.88 6.7 13.98 6.7C14.94 6.7 15.96 6.86 15.96 6.86V8.92H14.82C13.74 8.92 13.56 9.54 13.56 10.38V12.08H15.84L15.48 14.3H13.56V21.96C18.34 21.22 22 17.1 22 12.08C22 6.52 17.52 2.04 12 2.04Z"/>
  </svg>
);

export const TwitterIcon: React.FC<IconProps> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.04C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.01-.06C3.18 20.25 5.63 21 8.3 21c7.31 0 11.31-6.06 11.31-11.31 0-.17 0-.34-.01-.51.78-.56 1.45-1.26 1.98-2.03z"/>
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4A3.6,3.6 0 0,0 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6A3.6,3.6 0 0,0 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
  </svg>
);

export const LinkedInIcon: React.FC<IconProps> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.5A1.49 1.49 0 0 1 14.41 12C15.26 12 15.71 12.78 15.71 13.5V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
  </svg>
);

export const LoginIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M15.75 9l-3.75-3.75M15.75 9l3.75 3.75M15.75 15l3.75-3.75M15.75 15l-3.75 3.75" />
  </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const MusicPlayerIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    {/* Standardized musical note icon (Heroicons: musical-note) */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.073 1.935l-3.75 2.25M9 15V9l10.5-3m0 0V3" />
  </svg>
);

export const ChatIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443h2.28a2.25 2.25 0 002.25-2.25v-1.618c0-.884-.353-1.715-.986-2.343L13.44 6.324a2.25 2.25 0 00-3.182 0l-3.636 3.636a2.25 2.25 0 00-.636 1.591v1.215zM18.75 12.75v-1.591c0-.884.353-1.715.986-2.343L21.75 6.324a2.25 2.25 0 000-3.182L18.172.612a2.25 2.25 0 00-3.182 0l-3.636 3.636a2.25 2.25 0 00-.636 1.591v1.215c0 .41.163.81.443 1.121L18.75 12.75z" />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

export const FaceScanIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m0 0l3 2.25M6.75 7.5l3 2.25M6.75 12l3-2.25m-3 2.25l3 2.25m0 0l3 2.25M9.75 12l3-2.25M13.5 7.5l3 2.25-3 2.25m0 0l3 2.25M13.5 7.5l3 2.25M13.5 12l3-2.25M17.25 12l3-2.25m-12 3.75a3 3 0 116 0 3 3 0 01-6 0zm12 0a3 3 0 116 0 3 3 0 01-6 0zM2.25 12c0-4.142 4.03-7.5 9-7.5s9 3.358 9 7.5c0 .84-.16 1.645-.455 2.386M2.705 14.386A9.04 9.04 0 002.25 12c0-4.142 4.03-7.5 9-7.5s9 3.358 9 7.5c0 .84-.16 1.645-.455 2.386m-18.51 0A9.004 9.004 0 0012 21.75c2.236 0 4.29-.806 5.874-2.114" />
  </svg>
);

export const CameraIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.211 2.211 0 016.747 6H6.388a2.25 2.25 0 00-2.25 2.25v1.172c0 .09.017.177.052.259l3.793 3.793M2.25 12h3.75a.75.75 0 01.75.75v3.75a.75.75 0 01-.75.75h-3.75a.75.75 0 01-.75-.75v-3.75a.75.75 0 01.75-.75zM12 1.5V4.5m0 15V12m0 0a8.25 8.25 0 00-6.075 2.925M12 12a8.25 8.25 0 016.075 2.925m0 0A8.217 8.217 0 0112 22.5c-2.665 0-5.08-.963-6.925-2.575M19.5 12V9.75A2.25 2.25 0 0017.25 7.5h-.379c-.636 0-1.213-.228-1.655-.628a2.211 2.211 0 00-.12-.103L12 1.5m3 10.5a.75.75 0 01.75-.75h3.75a.75.75 0 01.75.75v3.75a.75.75 0 01-.75.75h-3.75a.75.75 0 01-.75-.75v-3.75z" />
  </svg>
);

export const ChatSendIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);
