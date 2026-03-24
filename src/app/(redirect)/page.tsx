const RedirectPage = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `window.location.replace('/en')`,
    }}
  />
);

export default RedirectPage;
