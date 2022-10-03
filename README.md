# InterventionDB
InterventionDB is a full-stack application designed to help K-12 teachers enter, track, and analyze student intervention data.

**Link to project:** htttps://interventiondb.com

![Site Preview Image]()

## How It's Made:

**Tech used:** HTML, CSS, Javascript, Express, Node.js, MongoDB

InterventionDB is built with MVC architecture to enable changes to components as new features are added and to ensure the project remains maintainable as the user base grows. Key project requirements include ease of use, data security, and maintainability over multiple school years.

Registered users can add, edit, and delete student intervention data. Intervention data is linked to user-entered interventions and user-created student IDs. Collected intervention data includes student ID, date of delivery, teacher notes, and any assessment data.

User authentication is handled by Passport middleware (google-oauth-20). Templating via EJS and CSS via Materialize.

## Optimizations

- 
## Planned Enhancements

- local user account option
- longitudinal student data tracking
- assessment scheduling
- crowd-sourced user ratings of effectiveness
- aggregated student data to rank interventions by average measured growth
- enhanced search, including source, free vs. paid, community rating
- Beta tester requests:
    - integration with Google Classroom
    - enhanced reporting

## Lessons Learned:

.