# Pre-requisite Check

Allows user to enter course. If a course has pre-req, it will be indicated.

To-do:

* Make every course an object to store pre, post, and co-requisites.
* Display collected info on page through DOM manipulation.
* Create user interface.
* Add auto-complete behavior.

Current issues:

* Returns nothing if course entered doesn't exist.
* Returns generic message if course does not have pre-requisite.
* Does not address **and**, **or**, and **co-requisite** situations.
* Does not display courses that entered coruse is a pre-req for.