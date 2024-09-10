import css from './Step.css';

const data = [
    { id: 1, h4: "Online service", span: "Access to multiplayer games", price: 1 },
    { id: 2, h4: "Larger storage", span: "Extra 1TB of cloud save", price: 2 },
    { id: 3, h4: "Customizable profile", span: "Custom theme on your profile", price: 3 },
];

export default function Step3() {

    const addOnsChoice = () => (
        data.map((item) => (
            <div className="step-3-select">
                <input type="checkbox"/>
                <div>
                    <h4>{item.h4}</h4>
                    <span>{item.span}</span>
                </div>
                <span>+${item.price}/mo</span>
            </div>
        ))
    );

    return (
        <div>
            <h1>Pick add-ons</h1>
            <span>Add-ons help enhance your gaming experience.</span>
            <div>
                {addOnsChoice()}   
            </div>
        </div>
    );
}