export const mongodb = {
  uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/employees"
}

if (process.env.NODE_ENV === 'test' && process.env.TAP_CHILD_ID) {
  mongodb.uri += `-test-${Number(process.env.TAP_CHILD_ID)}`;
}
