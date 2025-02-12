import React from 'react'

const TermsConditions = () => {
  return (
    <div className="w-full">

      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-10 px-6">
        <h2 className="text-xl font-bold text-center">Terms & Conditions</h2>
        <p className="text-center text-gray-600 mt-1">
          Please read these terms and conditions carefully before using our website.
        </p>

        <div className="mt-6 space-y-6 text-gray-800 text-sm leading-relaxed">
          <section>
            <h3 className="font-semibold text-lg">General Information</h3>
            <p>
              By using our website, you agree to abide by the rules laid out by us and consent to collection
              and use of all such information that you may furnish to, or through, our website. In some cases,
              while you visit our website, you may not need to provide any personal information...
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg">Security</h3>
            <p>
              To ensure security while transferring sensitive information, all ongoing transmissions between
              client and server are encrypted using advanced and standard protocols. We also practice
              restricted access by employees and hold them to high levels of confidentiality.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg">Disclosing Information</h3>
            <p>
              We do not disclose any personal information obtained from you from this website to third
              parties unless you permit us to do so...
            </p>
          </section>
        </div>
      </div>

    </div>
  );
};

export default TermsConditions;
