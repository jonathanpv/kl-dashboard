We will use `layoutId` for smooth transitions between different components. In this case, from a card in a list to an expanded view of that card.
We will also use `AnimatePresence` to animate components as they are added to or removed from the screen.

This technique helps create fluid transitions between a grid of cards and a detailed view, much like you'd see in many modern applications.

Initial structure:

```typescript
"use client"
 
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useState } from "react"
 
function CardContainer() {
    return (
        <div id="card-container">
            <header>
                <div>
                    <h2 className="page-title">Today</h2>
                </div>
                <div className="avatar">
                    <Image
                        src="/authors/matt-perry.png"
                        alt="Photo of Matt Perry"
                        width={40}
                        height={40}
                    />
                </div>
            </header>
            <CardGrid />
            <StyleSheet />
        </div>
    )
}
 
function StyleSheet() {
    return (
        <style>{`
      /** Copy styles from example source code */
    `}</style>
    )
}
 
// Mock data
const items = [
    /** Copy mock data from example source code */
]
 
export default CardContainer
```

Now, let's add the components without animations.

### CardContainer Component
The `CardGrid` component is where we'll manage which card is currently open.

```jsx
function CardGrid() {
    const [openId, open] = useState<string | null>(null)
    const close = () => open(null)
 
    return (
        <>
            <List open={open} />
            {openId && <Item close={close} id={openId} />}
        </>
    )
}
```

Here, `List` will show all our cards, and `Item` will render the selected card when it's opened.

### The List component
The `List` component renders the grid of cards:

```jsx
function List({ open }: { open: (id: string) => void }) {
    return (
        <ul className="card-list">
            {items.map((card) => (
                <Card key={card.id} {...card} open={() => open(card.id)} />
            ))}
        </ul>
    )
}
```
It loops through our data and renders a `Card` for each item. Each card is clickable and will call the `open` function when clicked.

### The Card component
The `Card` component is each individual card in our grid:

```jsx
function Card({
    id,
    title,
    category,
    open,
    top,
    bottom,
    width = "100%",
    left,
}: CardProps) {
    return (
        <li className="card" onClick={open}>
            <div className="card-content">
                <div className="card-image-container">
                    <img
                        className="card-image"
                        src={`/photos/app-store/${id}.jpg`}
                        alt=""
                        style={{ top, bottom, width, left }}
                    />
                </div>
                <div className="title-container">
                    <span className="h6">{category}</span>
                    <h2 className="h3">{title}</h2>
                </div>
            </div>
        </li>
    )
}
```
The `top`, `bottom`, etc. props help position the image. It's important that the image keeps its original shape in both the small card and the expanded view. This allows the animation library, Motion, to animate smoothly between the two states without distorting the image.

### The Item Component
The `Item` component displays the expanded view of a card. When a card is clicked, the `Item` component appears on top of the page, showing more details. This is often called a modal or a popover. A popover is just a container that shows up on top of other content.

```jsx
function Item({ id, close }) {
  const {
    category,
    title,
    content,
    top,
    bottom,
    width = "100%",
    left,
  } = items.find((item) => item.id === id)!
 
  return (
    <>
      <div
        className="overlay"
        onClick={close}
      />
      <div className="card-content-container open">
        <div className="card-content">
          <div className="card-image-container">
            <img
              className="card-image"
              src={`/photos/app-store/${id}.jpg`}
              alt=""
              style={{ top, bottom, width, left }}
            />
          </div>
          <div className="title-container">
            <span className="h6">{category}</span>
            <h2 className="h3">{title}</h2>
          </div>
          <div className="content-container small">
            {content}
          </div>
        </div>
      </div>
    </>
  )
}
```
Right now, we have a working modal that opens and closes. Next, we'll add animations to make the transition from the card to the modal feel seamless. For that, we need `layoutId`.

## Let's animate!
### Why we need `layoutId`
The key to creating smooth transitions between different components is the `layoutId` prop. When two `motion` components share the same `layoutId`, Motion automatically animates between them, even if they are in different parts of your code.

This is perfect for our example because:
* We need to animate a card from its position in the grid to a larger, centered view.
* The expanded view (`Item`) is a different component from the card in the grid (`Card`).
* We want a continuous animation, making it feel like it's the same element transforming.

Without `layoutId`, we would have to write complex code to calculate positions and sizes for the animation. With `layoutId`, Motion does all the heavy lifting.

### Adding `AnimatePresence` for the overlay
We also need `AnimatePresence` to animate components when they appear and disappear. We'll use it for the overlay and the expanded card.

Let's update our `CardGrid` component:

```jsx
function CardGrid() {
    const [openId, open] = useState<string | null>(null)
    const close = () => open(null)
 
    return (
        <>
            <List open={open} />
            <AnimatePresence>
                {openId && <Item close={close} id={openId} key="item" />}
            </AnimatePresence>
        </>
    )
}
```

### Adding `motion` components and `layoutId`
Now, let's update our `Card` component to use `motion` components and give them a `layoutId`:

```jsx
function Card({
    id,
    title,
    category,
    open,
    top,
    bottom,
    width = "100%",
    left,
}: CardProps) {
    return (
        <li className="card" onClick={open}>
            <motion.div
                className="card-content"
                layoutId={`card-container-${id}`}
            >
                <motion.div
                    className="card-image-container"
                    layoutId={`card-image-container-${id}`}
                >
                    <motion.img
                        className="card-image"
                        src={`/photos/app-store/${id}.jpg`}
                        alt=""
                        style={{ top, bottom, width, left }}
                        layoutId={`card-image-${id}`}
                    />
                </motion.div>
                <motion.div
                    className="title-container"
                    layoutId={`title-container-${id}`}
                    layout="position"
                >
                    <span className="h6">{category}</span>
                    <h2 className="h3">{title}</h2>
                </motion.div>
            </motion.div>
        </li>
    )
}
```
Notice the key changes:
* Regular `div` elements are replaced with `motion.div`.
* Each element that we want to animate has a unique `layoutId` that includes the card's `id`.
* The title container has `layout="position"`. This tells Motion to only animate the position of the text, not its size.

Similarly, let's update our `Item` component to use `layoutId`s that match the ones in the `Card` component:

```jsx
function Item({ id, close }: { id: string; close: VoidFunction }) {
  const {
    category,
    title,
    content,
    top,
    bottom,
    width = "100%",
    left,
  } = items.find((item) => item.id === id)!
 
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
        onClick={close}
      />
      <div className="card-content-container open">
        <motion.div
          className="card-content"
          layoutId={`card-container-${id}`}
        >
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <motion.img
              className="card-image"
              src={`/photos/app-store/${id}.jpg`}
              alt=""
              style={{ top, bottom, width, left }}
              layoutId={`card-image-${id}`}
            />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
            layout="position"
          >
            <span className="h6">{category}</span>
            <h2 className="h3">{title}</h2>
          </motion.div>
          <motion.div className="content-container small">
            {content}
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
```
Now, when we open an item, elements with matching `layoutId`s will animate from one to the other.

Since the original `Card` is still on the page, Motion smoothly transitions to the new `Item` component. When the `Item` is closed, `AnimatePresence` allows Motion to animate it out smoothly before it's removed.

## Conclusion
In this tutorial, we learned how to create a fluid card animation using Motion for React. The key techniques are:
* Using `layoutId` to create smooth transitions between different layouts.
* Using `AnimatePresence` to handle components entering and exiting the screen.
* Structuring components to help with the animation.

By using the same `layoutId` on elements in different components, we create a seamless animation. It looks like one element is transforming, but we are actually switching between two different components.
