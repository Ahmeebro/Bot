module.exports.config = {
  name: "autoreact-all",
  version: "1.0.0",
  hasPermission: 0,
  credits: "[ZAIN PRINCE]",
  description: "React on every message",
  commandCategory: "No Prefix",
  usages: "No usage",
  cooldowns: 0,
};

module.exports.handleEvent = function ({ api, event }) {
  const { threadID, messageID } = event;

  // Har message pe reaction lagane ke liye
  const reactions = ["❤️", "😢", "😂", "😮", "👍", "🎉"]; // Aap apne reactions yahan customize kar sakte hain
  const randomReaction = reactions[Math.floor(Math.random() * reactions.length)]; // Random reaction

  // Reaction lagana
  api.setMessageReaction(randomReaction, messageID, (err) => {
    if (err) console.error("Error setting reaction:", err);
  });
};

module.exports.run = function () {
  // Is command ke liye koi run functionality nahi hai
};
