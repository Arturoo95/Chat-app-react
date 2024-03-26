import ConfirmButton from "./ConfirmButton";

export default function InputAndConfirm({
  value,
  handleValueChange,
  handleSubmit,
}) {
  return (
    <div className="input-and-confirm-section">
      <textarea
        onChange={handleValueChange}
        value={value}
        required
        className="input-part"
        placeholder="What's on your mind today?"
        type="text"
      ></textarea>
      <ConfirmButton handleSubmit={handleSubmit} />
    </div>
  );
}
