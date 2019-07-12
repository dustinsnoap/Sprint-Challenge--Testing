1. In Jest, what are the differences between `describe()` and `it()` globals, and what are good uses for them?

Desribe is used to group individual test by category; one for each component being tested.

It is used for individual tests and should correlate to one behavior or outcome, but can have multiple expectations.

2. What is the point of `Test Driven Development`? What do you think about this approach?

Using testing as the foundation for writing new code forces developers to describe what they want their code to do before writing it. It helps determine if certain code is necessary, and helps developers write only what necessary to pass each test. Most importantly; testing ensures new code doesn't break old code.

3. Mention three types of automated tests.

Unit, component, snapshots