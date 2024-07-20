/** index.jsx build notes:
 *
 * The following exports are set up as named exports, and are imported in App.jsx
 * to be rendered.
 *
 * The Components folder is set up the same way, with each component being exported
 *
 * Syntax for exporting a component:
 * export { default as ComponentName } from './ComponentName';
 * the 'default as' syntax is used to rename the component to a more descriptive name
 * where the name is a key word.
 */
export { default as HomeLayout } from './HomeLayout';
export { default as DashboardLayout } from './DashboardLayout';
export { default as Landing } from './Landing';
export { default as Signup } from './Signup';
export { default as Login } from './Login';
export { default as Error } from './Error';
export { default as UserProfile } from './UserProfile';
export { default as NewJob } from './NewJob';
export { default as Jobs } from './Jobs';

// WARNING!!! comment out exports for empty files or index.js will not compile.
// export { default as EditJob } from './EditJob';

export { default as Admin } from './Admin';
