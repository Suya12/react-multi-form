import React, { useState } from "react";
import Step1 from "../Step/Step1";
import Step2 from "../Step/Step2";
import Step3 from "../Step/Step3";
import Step4 from "../Step/Step4";
import css from "./InputSection.css";

export default function InputSection() {
    const [currentStep, setCurrentStep] = useState('step1');
    
    const steps = {
        step1: <Step1 />,
        step2: <Step2 />,
        step3: <Step3 />,
        step4: <Step4 />,
      };

    const nextStep = () => {
        const stepOrder = ['step1', 'step2', 'step3', 'step4'];
        const currentIndex = stepOrder.indexOf(currentStep);
        if (currentIndex < stepOrder.length - 1) {
          setCurrentStep(stepOrder[currentIndex + 1]);
        }
    };

    const prevStep = () => {
        const stepOrder = ['step1', 'step2', 'step3', 'step4'];
        const currentIndex = stepOrder.indexOf(currentStep);
        if (currentIndex > 0) {
          setCurrentStep(stepOrder[currentIndex - 1]);
        }
      };
    
    return (
        <section className="input-section">

            {/* 현재 단계에 해당하는 컴포넌트 렌더링 */}
            {steps[currentStep]}
            
            <div className="button-div">
                <button onClick={prevStep} disabled={currentStep === 'step1'}>
                  Previous
                </button>
                <button onClick={nextStep} disabled={currentStep === 'step4'}>
                  Next Step
                </button>
            </div>
        </section>
    )
}

