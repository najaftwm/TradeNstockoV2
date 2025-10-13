import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePassword = () => setPasswordVisible(!passwordVisible);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    state: "",
    language: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [otpError, setOtpError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [otpSentMessage, setOtpSentMessage] = useState("");

  const AUTH_TOKEN =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJDLTc2OTU0MUI3QjY3QzQ5MSIsImlhdCI6MTc1OTcyNDI0NywiZXhwIjoxOTE3NDA0MjQ3fQ.PuwWxKPkSqhjFXSKPQmXX7kU40BPCXQLqM6PLWNP_p-iq6PdYSEJn--uOyB4vdY2Dr89NrtuMcU-WsI5ih5NoA";
  const CUSTOMER_ID = "C-769541B7B67C491";

  const phoneRegex = /^\d{10}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const languages = [
    "English",
    "Hindi",
    "Tamil",
    "Telugu",
    "Kannada",
    "Malayalam",
    "Bengali",
    "Gujarati",
    "Marathi",
    "Punjabi",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (successMessage) setSuccessMessage("");
    if (otpSentMessage) setOtpSentMessage("");
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone || !phoneRegex.test(formData.phone))
      newErrors.phone = "Valid 10-digit Indian phone number is required";
    if (!formData.whatsapp || !phoneRegex.test(formData.whatsapp))
      newErrors.whatsapp = "Valid 10-digit WhatsApp number is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.language) newErrors.language = "Please select a language";
    if (!formData.password)
      newErrors.password = "Password is required";
    else if (!passwordRegex.test(formData.password))
      newErrors.password =
        "Password must contain at least 8 characters, one letter and one number";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendOTP = async (phoneNumber) => {
    try {
      const url = "https://cpaas.messagecentral.com/verification/v3/send";
      const params = {
        countryCode: "91",
        flowType: "SMS",
        mobileNumber: phoneNumber,
        customerId: CUSTOMER_ID,
      };
      const response = await axios.post(url, null, {
        params,
        headers: { authToken: AUTH_TOKEN },
      });

      const id = response.data?.data?.verificationId;
      if (id) {
        setVerificationId(id);
        setShowOTPModal(true);
        setSubmitError("");
        setOtpSentMessage("OTP sent to your phone number!");
        toast.success("OTP sent successfully");
      } else {
        setSubmitError("Failed to send OTP");
        toast.error("Failed to send OTP");
      }
    } catch {
      setSubmitError("Failed to send OTP");
      toast.error("Failed to send OTP");
    }
  };

  const validateOTP = async (phoneNumber, verificationId, code) => {
    try {
      const response = await axios.get(
        "https://cpaas.messagecentral.com/verification/v3/validateOtp",
        {
          params: {
            countryCode: "91",
            mobileNumber: phoneNumber,
            verificationId,
            customerId: CUSTOMER_ID,
            code,
          },
          headers: { authToken: AUTH_TOKEN },
        }
      );

      const status = response.data?.data?.verificationStatus;
      if (
        response.data.responseCode === 200 &&
        status === "VERIFICATION_COMPLETED"
      ) {
        toast.success("OTP verified successfully!");
        await axios.post(
          "https://tnscrm.twmresearchalert.com/gateway/leadReg.php",
          {
            name: formData.name,
            phone: phoneNumber,
            email: formData.email,
            state: formData.state,
            language: formData.language,
            password: formData.password,
          }
        );
        toast.success("Lead submitted successfully!");
        setSuccessMessage("Successfully registered");
        setShowOTPModal(false);
        setOtp("");
        setOtpError("");
        setOtpSentMessage("");
      } else {
        setOtpError("Invalid OTP. Please try again.");
        toast.error("OTP verification failed");
      }
    } catch {
      setOtpError("Failed to validate OTP. Please try again.");
      toast.error("OTP validation error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await sendOTP(formData.phone);
    setIsSubmitting(false);
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    if (otp.length < 4) {
      setOtpError("OTP must be 4 digits");
      return;
    }
    setOtpError("");
    validateOTP(formData.phone, verificationId, otp);
  };

  return (
    <div className="min-h-screen bg-[#eceae0] flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-10">
      
      {/* LEFT SECTION */}
      <div className="md:w-1/2 text-center md:text-left space-y-5">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#4a4a2e] leading-tight">
          Discover the Future of <span className="text-blue-700">Trading</span>
        </h1>
        <p className="text-[#4a4a2e]/80 text-base md:text-lg leading-relaxed">
          Join thousands of smart investors using our platform to make better,
          data-driven decisions. Manage your trades, learn from experts, and
          grow your portfolio — all in one place.
        </p>
        <ul className="text-[#4a4a2e]/90 space-y-1.5 text-sm md:text-base">
          <li>✅ Real-time insights and analytics</li>
          <li>✅ Multi-language support for all users</li>
          <li>✅ Simple, fast & secure registration</li>
        </ul>
      </div>

      {/* RIGHT SECTION */}
      <div className="md:w-1/2 w-full bg-[#f8f8f4] rounded-xl shadow-lg p-6 md:p-7 transition duration-300">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-5 text-[#4a4a2e] tracking-wide drop-shadow-sm">
          Register
        </h2>

        {submitError && (
          <p className="text-red-500 text-sm text-center mb-3">{submitError}</p>
        )}

        {otpSentMessage && !successMessage && (
          <p className="text-green-500 text-sm text-center mb-3">
            {otpSentMessage}
          </p>
        )}

        {successMessage ? (
          <p className="text-green-600 text-center font-semibold text-lg">
            {successMessage}
          </p>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              {/* Inputs */}
              {[
                { name: "name", placeholder: "Full Name" },
                { name: "email", placeholder: "Email Address", type: "email" },
                { name: "phone", placeholder: "Phone (10 digits)" },
                { name: "whatsapp", placeholder: "WhatsApp (10 digits)" },
                { name: "state", placeholder: "State" },
              ].map((input) => (
                <div key={input.name}>
                  <input
                    type={input.type || "text"}
                    name={input.name}
                    value={formData[input.name]}
                    onChange={handleInputChange}
                    placeholder={input.placeholder}
                    disabled={isSubmitting}
                    className={`w-full border ${
                      errors[input.name] ? "border-red-400" : "border-gray-300"
                    } rounded-md p-2.5 md:p-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none`}
                  />
                  {errors[input.name] && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors[input.name]}
                    </p>
                  )}
                </div>
              ))}

              {/* Language */}
              <select
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className={`w-full border ${
                  errors.language ? "border-red-400" : "border-gray-300"
                } rounded-md p-2.5 md:p-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none`}
              >
                <option value="">Select Language</option>
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
              {errors.language && (
                <p className="text-red-500 text-xs mt-1">{errors.language}</p>
              )}

              {/* Passwords */}
              {["password", "confirmPassword"].map((field) => (
                <div key={field}>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    placeholder={
                      field === "password"
                        ? "Password"
                        : "Confirm Password"
                    }
                    disabled={isSubmitting}
                    className={`w-full border ${
                      errors[field] ? "border-red-400" : "border-gray-300"
                    } rounded-md p-2.5 md:p-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none`}
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4a4a2e] text-[#eceae0] font-semibold py-2.5 md:py-3 rounded-md hover:bg-[#3b3b27] transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Sending OTP..." : "Send OTP"}
              </button>
            </form>

            {/* OTP Modal */}
            {showOTPModal && (
              <div className="mt-6 bg-white border border-gray-200 p-5 rounded-xl shadow-md">
                <h3 className="text-blue-700 font-semibold text-center mb-3">
                  Enter OTP
                </h3>
                <form onSubmit={handleOTPSubmit} className="flex flex-col gap-3">
                  <input
                    type="text"
                    maxLength="6"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    placeholder="Enter OTP"
                    className={`w-full border ${
                      otpError ? "border-red-400" : "border-gray-300"
                    } rounded-md p-2.5 text-sm focus:ring-2 focus:ring-blue-400 outline-none`}
                  />
                  {otpError && (
                    <p className="text-red-500 text-xs text-center">
                      {otpError}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-[#4a4a2e] text-[#eceae0] font-semibold py-2.5 rounded-md hover:bg-[#3b3b27] transition duration-300"
                  >
                    Verify OTP
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowOTPModal(false)}
                    className="text-blue-600 text-xs text-center mt-2 hover:underline"
                  >
                    Cancel
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;