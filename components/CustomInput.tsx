import * as ImagePicker from "expo-image-picker";
import React, { useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { IMessage, InputToolbarProps } from "react-native-gifted-chat";

interface CustomInputProps extends InputToolbarProps<IMessage> {
  onSend: (text: string) => void;
  placeholder?: string;
  onUploadImage: (uri: string) => void;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  onSend,
  placeholder = "Type a message...",
  onUploadImage,
}) => {
  const [text, setText] = useState("");
  const isSendingRef = useRef(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.assets && result.assets.length > 0) {
      onUploadImage(result.assets[0].uri);
    }
  };

  const openCamera = async () => {
    const res1 = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      // aspect: [4, 3],
      // quality: 1,
    });
    // const res1 = await ImagePicker.launchCameraAsync({
    //   mediaTypes: ["videos"],
    //   allowsEditing: true,
    //   // aspect: [4, 3],
    //   // quality: 1,
    // });
    if (res1.assets && res1.assets.length > 0) {
      onUploadImage(res1.assets[0].uri);
    }
    console.log(res1, "res1");
  };

  const handleSend = () => {
    if (text.trim() && !isSendingRef.current) {
      isSendingRef.current = true;
      onSend(text.trim());
      setText("");
      setTimeout(() => {
        isSendingRef.current = false;
      }, 100);
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.nativeEvent.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const handleTextChange = (newText: string) => {
    if (isSendingRef.current) {
      return;
    }

    setText(newText);

    if (newText.endsWith("\n") && !newText.endsWith("\n\n")) {
      const messageText = newText.slice(0, -1).trim();
      if (messageText && !isSendingRef.current) {
        isSendingRef.current = true;
        onSend(messageText);
        setText("");
        setTimeout(() => {
          isSendingRef.current = false;
        }, 100);
      } else if (!messageText) {
        setText("");
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={text}
          onChangeText={handleTextChange}
          placeholder={placeholder}
          placeholderTextColor="#999"
          multiline
          maxLength={1000}
          onKeyPress={handleKeyPress}
          textAlignVertical="center"
          returnKeyType="send"
          enablesReturnKeyAutomatically={true}
        />
        <View style={styles.sendButtonContainer}>
          <TouchableOpacity onPress={openCamera}>
            <Image
              source={require("../assets/images/camera.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={pickImage}>
            <Image
              source={require("../assets/images/attachment.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sendButton,
              !text.trim() && styles.sendButtonDisabled,
            ]}
            onPress={handleSend}
            disabled={!text.trim() || isSendingRef.current}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    includeFontPadding: false,
    margin: 0,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    maxHeight: 100,
    paddingHorizontal: 8,
    color: "#000",
  },
  sendButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 7,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 60,
  },
  sendButtonDisabled: {
    backgroundColor: "#ccc",
  },
  sendButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  sendButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
  },
});
