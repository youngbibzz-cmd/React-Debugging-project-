# React Developer Tools Debugging Report

## Issues Found
- Issue 1: The user profile did not receive the user object under the prop name expected by `UserProfile`.
- Issue 2: The email display read a property that was not present on the user object.
- Issue 3: The Decrease button increased the counter instead of decreasing it.

## How I Found the Issues
React Developer Tools showed that `UserProfile` had no `user` prop even though `App` held the user object in state. Inspecting `UserInfo` showed that its email lookup did not match the `email` field in the object. Testing the counter buttons revealed that both actions changed the count in the same direction.

## Solutions
Passed the user object to `UserProfile` with the `user` prop, read `user.email` in `UserInfo`, and changed the decrease handler to subtract one from the current counter value. Both counter handlers now use functional state updates.

## Final Result
The profile displays the user's name, email, and profession. Increase raises the count by one, and Decrease lowers it by one. The dashboard builds and passes lint checks.