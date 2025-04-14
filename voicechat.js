class VoiceChatExtension {
    getInfo() {
        return {
            id: 'voicechat',
            name: 'Voice Chat',
            blocks: [
                {
                    opcode: 'joinRoom',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'join voice room [ROOM]',
                    arguments: {
                        ROOM: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'lobby'
                        }
                    }
                },
                {
                    opcode: 'updatePosition',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'update position x: [X] y: [Y]',
                    arguments: {
                        X: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
                    }
                }
            ]
        };
    }

    constructor() {
        this.peers = {}; // Store WebRTC peer connections
        this.currentRoom = null;
        this.position = { x: 0, y: 0 };
    }

    joinRoom({ ROOM }) {
        this.currentRoom = ROOM;
        // TO DO: connect via WebRTC signaling server
        console.log(`Joined room: ${ROOM}`);
    }

    updatePosition({ X, Y }) {
        this.position = { x: X, y: Y };
        // TO DO: send updated position to server
    }
}

Scratch.extensions.register(new VoiceChatExtension());
