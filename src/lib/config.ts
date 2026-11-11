export const APP_CONFIG = {
  name: "TortuCord",
  version: "1.0.0",
  description: "Next-Gen Discord Automation Platform & Web Management Dashboard",
  githubUrl: "https://github.com/rzlfathurrahman/tortucord",
  discordSupportUrl: "https://discord.gg/tortucord",
  patreonUrl: "https://patreon.com/rzlfathurrahman",
  kofiUrl: "https://ko-fi.com/rzlfathurrahman",
  saweriaUrl: "https://saweria.co/rzlfathurrahman",
  docsUrl: "/docs",
  botInviteUrl: (guildId?: string) => {
    const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID || "";
    if (!clientId) return "/docs";
    const base = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&permissions=8&scope=bot%20applications.commands`;
    return guildId ? `${base}&guild_id=${guildId}` : base;
  },
};
