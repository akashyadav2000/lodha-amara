const CookiesPolicy = () => {
  return (
    <div className="w-full">

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-xl font-bold text-center">Cookies Policy</h2>
        <p className="text-center text-gray-600 mt-1">
          This policy explains how we use cookies and similar technologies on our website.
        </p>

        <hr className="border-gray-300 my-4" />

        <div className="mt-6 text-gray-800 text-sm leading-relaxed">
          <p>
            Your Internet browser has the in-built facility for storing small files - ‘cookies’ - that hold
            information which allows a website to recognise your account. Our website takes advantage of this
            facility to enhance your experience. You have the ability to prevent your computer from accepting
            cookies but, if you do, certain functionality on the website may be impaired.
          </p>

          <section className="mt-4">
            <p>
              We may use cookies for security, session continuity, and customization purposes. In case of a user
              opting to reject a cookie, he/she may not be able to gain access to some of the limited services
              or use some features of the site. In case of any queries or suggestions regarding privacy statements
              or your dealings with this website, please contact us. You also hold an option of requesting removal
              from our mailing list. We do not share your personal information with any third party.
            </p>
          </section>
        </div>
      </div>

    </div>
  );
};

export default CookiesPolicy;
