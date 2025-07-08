# Navigation Approaches in ExpoChat

This project demonstrates two different navigation approaches in Expo Router.

## 🏗️ Current Setup: Stack-Based Navigation (Active)

### File Structure:

```
app/
├── _layout.tsx          # Stack navigation setup
├── index.tsx           # Home screen
├── about.tsx           # About screen
├── settings.tsx        # Settings screen
└── (tabs)/             # Tab navigation (commented out)
    ├── _layout.tsx     # Tab layout (commented out)
    ├── index.tsx       # Tab home screen
    ├── about.tsx       # Tab about screen
    └── settings.tsx    # Tab settings screen
```

### How Stack Navigation Works:

1. **Root Layout** (`app/_layout.tsx`):

```typescript
<Stack>
  <Stack.Screen name="index" options={{ title: "Home" }} />
  <Stack.Screen name="about" options={{ title: "About" }} />
  <Stack.Screen name="settings" options={{ title: "Settings" }} />
</Stack>
```

2. **Navigation**:

```typescript
router.push("/"); // Go to home
router.push("/about"); // Go to about
router.push("/settings"); // Go to settings
```

3. **Features**:

- ✅ Header navigation with back button
- ✅ Screen titles in header
- ✅ Stack-based navigation (push/pop)
- ✅ Custom header styling

## 📱 Alternative: Tab-Based Navigation (Commented Out)

### How to Switch to Tab Navigation:

1. **Uncomment in `app/_layout.tsx`**:

```typescript
// Change this:
<Stack.Screen name="(tabs)" options={{ headerShown: false }} />

// Instead of:
<Stack.Screen name="index" options={{ title: "Home" }} />
<Stack.Screen name="about" options={{ title: "About" }} />
<Stack.Screen name="settings" options={{ title: "Settings" }} />
```

2. **Uncomment `app/(tabs)/_layout.tsx`**:

```typescript
// Remove the comment block and use the Tabs component
```

3. **Move screens back to `(tabs)` folder**:

```bash
# Move files from app/ back to app/(tabs)/
mv app/index.tsx app/\(tabs\)/
mv app/about.tsx app/\(tabs\)/
mv app/settings.tsx app/\(tabs\)/
```

### Tab Navigation Features:

- ✅ Bottom tab bar
- ✅ Tab icons (emoji)
- ✅ No headers (clean look)
- ✅ Tab-based navigation

## 🔄 Switching Between Approaches

### To Use Stack Navigation (Current):

- ✅ Already active
- Screens are in `app/` folder
- Headers are shown

### To Use Tab Navigation:

1. Comment out stack screens in `app/_layout.tsx`
2. Uncomment tab screen in `app/_layout.tsx`
3. Uncomment `app/(tabs)/_layout.tsx`
4. Move screen files to `app/(tabs)/` folder

## 🎯 Navigation Methods

Both approaches use the same navigation code:

```typescript
import { router } from "expo-router";

// Navigate to screens
router.push("/"); // Home
router.push("/about"); // About
router.push("/settings"); // Settings
```

## 📋 Comparison

| Feature       | Stack Navigation       | Tab Navigation         |
| ------------- | ---------------------- | ---------------------- |
| Header        | ✅ Yes                 | ❌ No                  |
| Back Button   | ✅ Yes                 | ❌ No                  |
| Bottom Tabs   | ❌ No                  | ✅ Yes                 |
| Screen Stack  | ✅ Yes                 | ❌ No                  |
| File Location | `app/`                 | `app/(tabs)/`          |
| Navigation    | `router.push('/path')` | `router.push('/path')` |

## 🚀 Current Status

**Active**: Stack-based navigation with headers
**Available**: Tab-based navigation (commented out)

Both approaches are fully functional and ready to use!
