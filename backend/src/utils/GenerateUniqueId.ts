import crypto from "crypto";

export default function GenerateUniqueId(): string {
  return crypto.randomBytes(4).toString("hex");
}
