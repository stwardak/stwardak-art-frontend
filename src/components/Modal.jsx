import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal-background">
        <section className="modal-main bg-light dark:bg-dark text dark:text-light fill-">
          {props.children}
          <button className="close" type="button" onClick={props.onClose}>
          <svg
              className="w-8 h-8 stroke-dark dark:stroke-light"
              fill="none"
              stroke=""
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d='M6 18L18 6M6 6l12 12'
              ></path>
            </svg>
          </button>
        </section>
      </div>
    );
  }
}