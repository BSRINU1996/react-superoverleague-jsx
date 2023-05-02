const element = (
    //   Write your code here.
    <div className="bg-container">
        <h1 className='main-heading'>SUPEROVER LEAGUE</h1>
        <div className="image-container">
            <img
                src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
                className="image-one"
            />
            <img
                src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
                className="image-two"
            />
        </div>
    </div>
);
// react.createElement("h1" ,{className:"main-heading"})

ReactDOM.render(element, document.getElementById("root"));
