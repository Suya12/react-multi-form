import css from './StepSection.css';

export default function StepSection() {

    const steps = [
        { index: 1, content : "YOUR INFO"},
        { index: 2, content : "SELECT PLAN"},
        { index: 3, content : "ADD-ONS"},
        { index: 4, content : "SUMMARY"},
    ];

    return (
        <section className='step-section'>
            {steps.map((step) => (
            <div key={step.index} className='step'>
                <button>{step.index}</button>
                <div>
                    <h5>STEP {step.index}</h5>
                    <h4>{step.content}</h4>
                </div>
            </div>
        ))}
        </section>
    );
}

