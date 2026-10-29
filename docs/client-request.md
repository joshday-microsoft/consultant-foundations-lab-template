# Client request (synthetic)

> Training scenario only. This is fabricated material and does not describe a real client or system.

## Request

Our quote calculator should apply a 15% volume discount when a quote contains **10 or more units**. Quantities below 10 receive no volume discount. We have noticed inconsistent totals near the qualifying quantity. Please correct the rule with a focused change and add regression coverage around the boundary.

All monetary inputs and results are integer cents. For a unit price of 1,000 cents:

- Quantity 9 has no discount: expected total **9,000 cents**.
- Quantity 10 receives 15% off: expected total **8,500 cents**.

The function's existing public API and return unit must remain unchanged. Do not add a dependency or broaden this into a pricing redesign. Document the command and actual result of verification, along with meaningful limitations.

## Handoff

Submit the work as a pull request in the private personal learner repository. Include acceptance criteria, verification, risks, and a clear reviewer handoff. Do not merge without peer review.
