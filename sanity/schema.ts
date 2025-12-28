import profile from "./profile.schema";
import project from "./project.schema";

// Export all schemas for Sanity Studio
export const schemaTypes = [profile, project];

// For use with sanity.config.ts in a Sanity Studio project
export default schemaTypes;
