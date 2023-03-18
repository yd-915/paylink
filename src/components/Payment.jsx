import copy from "copy-to-clipboard";

const Payment = ({ img, label, value, setQrData }) => {
  const copyEvent = (e) => {
    const tooltip = e.currentTarget;
    tooltip.setAttribute("data-tip", "Copied!");

    setTimeout(() => {
      tooltip.setAttribute("data-tip", "Copy");
    }, 3000);

    copy(value);
  };

  return (
    <div className="flex justify-between items-center p-4 h-14 sm:mx-0 mx-1 bg-neutral shadow-md rounded-full transition ease-in-out delay-150 sm:hover:scale-105 duration-300">
      <img src={img} alt={label + " logo"} className="w-8 h-8" />
      <p className="font-normal text-base text-neutral-content mx-2 flex-grow text-center pl-9">
        {label}
      </p>
      <div>
        <div
          className="tooltip tooltip-accent"
          data-tip="Copy"
          onClick={(e) => copyEvent(e)}
        >
          <button className="btn btn-sm bg-neutral border-0 text-neutral-content hover:bg-neutral-focus">
            <i className="bx bx-copy text-lg"></i>
          </button>
        </div>

        <label
          htmlFor="modal-qr"
          className="btn btn-sm bg-neutral border-0 text-neutral-content hover:bg-neutral-focus"
          onClick={() => setQrData({ img, label, value })}
        >
          <i className="bx bx-qr text-lg"></i>
        </label>
      </div>
    </div>
  );
};

export default Payment;
