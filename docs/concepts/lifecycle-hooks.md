# Lifecycle Hooks 🪝

There are two basic lifecycle hooks in GEM. Similarly to how it is in Arduino development there is a `setup()` and `loop()` method, just the method names are different.

The basic lifecycle hooks are exported on the root level of the engine `src/main.js :: GEM`

## GEM.setup()

The setup method where you would ideally load and build all assets (audio and visual) to maximize the engine performance. Variables are locally scoped, but the best practice is to dispatch actions that modify the `gameState`. It's highly recommended to use the built-in asset constructors to archieve this task; as that is the **simplest** and **safest** way. Please check the _api reference_ or _examples_ to learn about the above mentioned constructor methods.


```typescript
GEM.setup(callback: callableFunction, developerMode: boolean);
```

- **callback** you can write your setup code in the callback function
- **developerMode** you can enable or disable the developer mode

### Example

```typescript
GEM.setup(()=>{
    //...
}, false)
```

## GEM.gameLoop()

In this method, the callback function is called every frame, and all changes that are dispatched and stored in the **gameState** are executed. Firstly the **gameStateQueue** is cleared then the **computableActions** are calculated and executed. 

```typescript
GEM.gameLoop(()=>{
    //..
});
```