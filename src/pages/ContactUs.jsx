import DebouncedInput from "../components/DebouncedInput";
import useChangeTabName from "../hooks/useChangeTabName";

export default function ContactUs() {
  useChangeTabName("Contact US");
  return (
    <>
      <h2>Contact Us</h2>
      <DebouncedInput />
    </>
  );
}
