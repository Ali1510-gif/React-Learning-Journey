// ================= First React Element =================

const heading = React.createElement(
  "h1",
  {
    className: "element",
    id: "first",
    style: {
      fontSize: "30px",
      backgroundColor: "orange",
      color: "white",
      padding: "10px",
    },
  },
  "Hello Coder Army",
);

// ================= Second React Element =================

const subHeading = React.createElement(
  "h2",
  {
    className: "element",
    id: "second",
    style: {
      fontSize: "22px",
      backgroundColor: "pink",
      color: "green",
      padding: "10px",
    },
  },
  "Strike is Launched",
);

// ================= Parent Element =================
//
// React.createElement(
//      type,
//      props,
//      child1,
//      child2,
//      child3,
//      ...
// )

const container = React.createElement(
  "div",
  {
    style: {
      border: "2px solid white",
      padding: "20px",
      width: "500px",
      margin: "40px auto",
      textAlign: "center",
    },
  },

  heading,
  subHeading,
);

// ================= Create React Root =================

// Select the HTML element having id="root"
const rootElement = document.getElementById("root");

// Create React Root
const root = ReactDOM.createRoot(rootElement);

// ================= Render =================

// Convert React Elements into Real DOM
root.render(container);

// ================= Console Output =================

// React Elements are simply JavaScript Objects
console.log(container);
