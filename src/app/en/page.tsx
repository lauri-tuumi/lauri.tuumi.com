const EnRedirectPage = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `window.location.replace('/')`,
    }}
  />
);

export default EnRedirectPage;
