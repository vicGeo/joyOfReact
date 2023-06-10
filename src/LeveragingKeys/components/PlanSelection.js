import React from "react";

import PriceDisplay from "./PriceDisplay";
import styles from "./PlanSelection.module.css";

function PlanSelection({ plans }) {
  const id = React.useId();

  const [plan, setPlan] = React.useState(plans[0]);

  return (
    <>
      <PriceDisplay price={plan.price} />

      <fieldset className={styles.fieldset}>
        <legend>Select plan:</legend>
        <div className={styles.optionGroup}>
          {plans.map((plan) => {
            const uniquePlanId = `${id}-${plan.id}`;

            return (
              <div className={styles.option} key={plan.id}>
                <input
                  type="radio"
                  name={id}
                  id={uniquePlanId}
                  value={plan.value}
                  onChange={() => setPlan(plan)}
                />
                <label htmlFor={uniquePlanId}>{plan.label}</label>
              </div>
            );
          })}
        </div>
      </fieldset>
    </>
  );
}

export default PlanSelection;
