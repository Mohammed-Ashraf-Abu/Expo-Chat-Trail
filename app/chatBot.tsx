import { CustomInput } from "@/components/CustomInput";
import { CustomMessage } from "@/components/CustomMessage";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { GiftedChat, IMessage } from "react-native-gifted-chat";

export const ChatBot = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello! I'm your AI assistant. How can I help you today? 🤖",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "AI Assistant",
          avatar: "https://placeimg.com/140/140/tech",
        },
      },
    ]);
  }, []);

  const onUploadImage = async (uri: string) => {
    onSend([
      {
        image: uri,
        _id: Math.round(Math.random() * 1000000),
        text: "what is this image?",
        createdAt: 0,
        user: {
          _id: 1,
          name: "Image Upload",
          avatar: "https://placeimg.com/140/140/tech",
        },
      },
    ]);
    console.log(messages, "messages");
  };

  const onSend = useCallback(async (newMessages: IMessage[] = []) => {
    setMessages((prev) => GiftedChat.append(prev, newMessages));
    setIsTyping(true); // Start typing indicator

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          // model: "meta-llama/llama-4-maverick:free",
          model: "mistralai/mistral-nemo:free",
          messages: [{ role: "user", content: newMessages[0].text }],
        },
        {
          headers: {
            Authorization:
              "Bearer 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",
            "HTTP-Referer": "https://mychatbot.com",
            "Content-Type": "application/json",
          },
        }
      );

      const botReply = response.data.choices?.[0]?.message?.content;

      if (botReply) {
        const botMessage: IMessage = {
          _id: Math.round(Math.random() * 1000000),
          text: botReply,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "AI Assistant",
            avatar: "https://placeimg.com/140/140/tech",
          },
        };

        setMessages((prev) => GiftedChat.append(prev, [botMessage]));
      }
    } catch (error: any) {
      console.error(
        "OpenRouter error:",
        error?.response?.data || error.message
      );
    } finally {
      setIsTyping(false); // Stop typing indicator
    }
  }, []);

  const handleCustomSend = (text: string) => {
    const newMessage: IMessage = {
      _id: Math.round(Math.random() * 1000000),
      text: text.trim(),
      createdAt: new Date(),
      user: {
        _id: 1,
        name: "Atom",
        avatar:
          "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      },
    };
    onSend([newMessage]);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <GiftedChat
          messagesContainerStyle={styles.messagesContainer}
          messages={messages}
          user={{
            _id: 1,
            name: "Atom",
            avatar:
              "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
          }}
          imageStyle={{ padding: 10 }}
          alwaysShowSend
          infiniteScroll
          renderLoading={() => (
            <ActivityIndicator size="large" color="#007AFF" />
          )}
          showUserAvatar={true}
          showAvatarForEveryMessage={true}
          renderAvatarOnTop={true}
          renderUsernameOnMessage={true}
          renderMessage={(props) => {
            return <CustomMessage {...props} />;
          }}
          renderInputToolbar={(props) => (
            <CustomInput
              {...props}
              onSend={handleCustomSend}
              onUploadImage={onUploadImage}
            />
          )}
          isTyping={isTyping}
        />
      </SafeAreaView>
    </View>
  );
};

export default ChatBot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  messagesContainer: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },

  avatarContainer: {
    marginHorizontal: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  userAvatar: {
    // backgroundColor: '#007AFF',
    justifyContent: "center",
    alignItems: "center",
    objectFit: "contain",
  },
  botAvatar: {
    backgroundColor: "#34C759",
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
