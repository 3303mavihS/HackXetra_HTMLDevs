// backend/controllers/streamController.js
//
// SECURITY FIX (CWE-798: Hardcoded Credentials)
// Live Stream Chat API key and secret were previously hardcoded here and
// committed to git history. Those credentials are COMPROMISED and have been
// ROTATED. They are now read from environment variables
// (see server/.env.example).
const { StreamChat } = require('stream-chat');

const STREAM_API_KEY = process.env.STREAM_API_KEY;
const STREAM_SECRET = process.env.STREAM_SECRET;

if (!STREAM_API_KEY || !STREAM_SECRET) {
  throw new Error(
    'STREAM_API_KEY and STREAM_SECRET environment variables must be set. See server/.env.example'
  );
}

exports.generateToken = async (req, res) => {
    const { userId, username } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'Missing user ID' });
    }

    try {
      const serverClient = StreamChat.getInstance(STREAM_API_KEY, STREAM_SECRET);
      const token = serverClient.createToken(userId);

      res.status(200).json({
        token,
        apiKey: STREAM_API_KEY
      });
    } catch (error) {
      console.error('Error generating token:', error);
      res.status(500).json({ error: 'Error generating token' });
    }
  };
