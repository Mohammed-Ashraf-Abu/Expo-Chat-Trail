import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IMessage, MessageProps } from "react-native-gifted-chat";

interface CustomMessageProps
  extends Omit<MessageProps<IMessage>, "currentMessage"> {
  currentMessage?: IMessage;
}

export const CustomMessage: React.FC<CustomMessageProps> = ({
  currentMessage,
  position,
}) => {
  if (!currentMessage) return null;

  const isUser = position === "right";

  const formatTime = (timestamp: number | Date) => {
    const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  return (
    <View
      style={[
        styles.messageContainer,
        isUser ? styles.userMessage : styles.botMessage,
      ]}
    >
      <View
        style={[styles.avatar, isUser ? styles.userAvatar : styles.botAvatar]}
      >
        {currentMessage.user?.avatar &&
        typeof currentMessage.user.avatar === "string" ? (
          <Image
            source={{ uri: currentMessage.user.avatar }}
            style={styles.avatarImage}
          />
        ) : (
          <Text style={styles.avatarText}>
            {currentMessage.user?.name?.charAt(0) || "U"}
          </Text>
        )}
      </View>

      <View
        style={[
          styles.contentContainer,
          isUser ? styles.userContent : styles.botContent,
        ]}
      >
        {!isUser && currentMessage.user?.name && (
          <Text style={styles.username}>{currentMessage.user.name}</Text>
        )}

        <View
          style={[
            styles.textContainer,
            isUser ? styles.userTextContainer : styles.botTextContainer,
          ]}
        >
          <Text
            style={[
              styles.messageText,
              isUser ? styles.userText : styles.botText,
            ]}
          >
            {currentMessage.text}
          </Text>
        </View>

        {currentMessage.image && typeof currentMessage.image === "string" && (
          <Image
            source={{ uri: currentMessage.image }}
            style={styles.messageImage}
            resizeMode="cover"
          />
        )}

        {currentMessage.createdAt && (
          <Text
            style={[
              styles.timestamp,
              isUser ? styles.userTimestamp : styles.botTimestamp,
            ]}
          >
            {formatTime(currentMessage.createdAt)}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: "row",
    marginVertical: 4,
    paddingHorizontal: 16,
    maxWidth: "85%",
  },
  userMessage: {
    alignSelf: "flex-end",
    flexDirection: "row-reverse",
  },
  botMessage: {
    alignSelf: "flex-start",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  userAvatar: {
    backgroundColor: "#007AFF",
  },
  botAvatar: {
    backgroundColor: "#34C759",
  },
  avatarImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  avatarText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
  },
  userContent: {
    alignItems: "flex-end",
  },
  botContent: {
    alignItems: "flex-start",
  },
  username: {
    fontSize: 12,
    color: "#666",
    marginBottom: 2,
    fontWeight: "500",
  },
  textContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 18,
    maxWidth: "100%",
  },
  userTextContainer: {
    backgroundColor: "#007AFF",
    borderBottomRightRadius: 4,
  },
  botTextContainer: {
    backgroundColor: "#E8E8E8",
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  userText: {
    color: "white",
  },
  botText: {
    color: "#000",
  },
  messageImage: {
    width: 200,
    height: 150,
    borderRadius: 12,
    marginTop: 8,
  },
  timestamp: {
    fontSize: 11,
    marginTop: 4,
    opacity: 0.7,
  },
  userTimestamp: {
    textAlign: "right",
    color: "#666",
  },
  botTimestamp: {
    textAlign: "left",
    color: "#666",
  },
});
