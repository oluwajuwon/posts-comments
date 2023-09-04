This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

# Setup Instructions

1. Clone this repository
2. Type the following command to install the dependencies

```
yarn install

```

3. Check into the ios directory and type the following commands to install the dependencies for ios

```
cd ios

bundle install

pod install

cd ..

```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see the new app running in your preferred _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run the app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You've successfully run the project. :partying_face:

## To test the application

Run the command below

```
yarn test

```

# Usage

There are two major tabs

- Posts: This tab contains the list of all photos and when one is clicked on, it navigates to a single post that contains the photo and comments. The head of the photos screen shows the user's current location / coordinates. When the user launches the app for the first time it immeditely asks the user for permission to use their location
- Cards: This tab contains 3 (small, medium and large) lists of cards of different dimensions. The entire list is scrollable vertically and each list is scrollable horizontally

# Comments

- The user lcoation should have an alternative way of retrieving the location incase the user does not grant the app permission to use their location. For this, a tool like google places autocomplete can be used, where a user will enter their location and the coordinates will be retrieved, for this scope of this test that alternative was not implemented. the current coordinates is just basic text for now.
- The bottom navigation used is a basic bottom navigation, for the scope of this test, although it can be customized by adding a `tabBar` component.
- Due to time, i just did the implementation for the cards page, i did not cover tests for that screen
-
