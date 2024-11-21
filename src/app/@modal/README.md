# Parallel-routes and interception
In this document I'll show you how you can create your own modals. I highly recommend that you read the documentation for [parallel-routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals) and [intercepting-routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes) before continuing. A minimal example can be found [@nextgram](https://github.com/vercel/nextgram) template from vercel
<br><br>

## Basic implementation for modal
If you want to create modals using this method we can use our case as an example, this will also show you how to add your own modals in this project. We'll start by creating our modal portal that will wrap around our content
<details>
  <summary>Code example: @/components/modal/container.tsx</summary>

  ```ts filename="container.tsx"
  import { type ElementRef, useEffect, useRef } from 'react';
  import { useRouter } from 'next/navigation';
  import { createPortal } from 'react-dom';

  /**
   * This component creates a portal that we can wrap our content around to display it as
   * a modal regardless of path.
   */
  export function ModalContainer({ children }: { children: React.ReactNode }) {
    // router is used to access nextjs router to navigate back to origin.
    const router = useRouter();
    // is used to reference our modal so that we can conditionally trigger display.
    const dialogRef = useRef<ElementRef<'dialog'>>(null);

    useEffect(() => {
      if (!dialogRef.current?.open) {
        dialogRef.current?.showModal();
      }
    }, []);

    /**
     * Since this component works a bit differently than a normal dialog, we have to
     * close it by navigating back one level. This action does not trigger a page refresh.
     */
    function onDismiss() {
      router.back();
    }

    return createPortal(
      {/* This is our component that will render */}
      <div className="fixed inset-0">
        <dialog ref={dialogRef} className="p-2" onClose={onDismiss}>
          {children}
          <button onClick={onDismiss} className="absolute top-4 right-4 w-12 h-12 bg-slate-800" />
        </dialog>
      </div>,
      {/* this is the target where we will attach our portal which exists in root layout.tsx */}
      document.getElementById('modal-root')!
    );
  }
  ```
</details>
<details>
  <summary>Code example: @/components/modal/container.tsx (without comments)</summary>

  ```ts filename="container.tsx"
  import { type ElementRef, useEffect, useRef } from 'react';
  import { useRouter } from 'next/navigation';
  import { createPortal } from 'react-dom';

  export function ModalContainer({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const dialogRef = useRef<ElementRef<'dialog'>>(null);

    useEffect(() => {
      if (!dialogRef.current?.open) {
        dialogRef.current?.showModal();
      }
    }, []);

    function onDismiss() {
      router.back();
    }

    return createPortal(
      <div className="fixed inset-0">
        <dialog ref={dialogRef} className="p-2" onClose={onDismiss}>
          {children}
          <button onClick={onDismiss} className="absolute top-4 right-4 w-12 h-12 bg-slate-800" />
        </dialog>
      </div>,
      document.getElementById('modal-root')!
    );
  }
  ```
</details>
<br>

Afterwards we must create a portal target in our base `layout.tsx` file. This is done by passing the prop `{ modal }` into `RootLayout`and consumed by adding `{ modal }` and `<div id="modal-root" />` somewhere inside BODY tag. If you're wondering why the prop is called `modal` then its because thats whats our `@modal` folder is called. We could have called it `@somethingelse` and our prop would then be called `{ somethingelse }`.
<details>
  <summary>Code example: @/app/layout.tsx</summary>

  ```ts filename="container.tsx"
  // We need to add the 'modal' prop and target id as specified in modal component
  export default function RootLayout({ modal, children }: { modal: React.ReactNode, children: React.ReactNode }) {
    return (
      <html>
        <body>
          {children}
          {modal}
          <div id="modal-root" />
        </body>
      </html>
    );
  }
  ```
</details><br>

## Thats fine, but how do I use this?
  We already have a modal for newsletter, but lets add one for each book that teamwork page has linked.
  first we need to create two directories, one normal for when a user visits the page from an external link, and one when a user clicks on the button to trigger the modal. The triggering action is done when nextjs is already mounted and reacts to a NextLink action. In this example I'll be using [Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes) so that we don't have to create a page for each book.

Now comes the easy part, we just have to create pages for our content. This is pretty much just a normal react component without any magic. Dynamic routes is doing most of the heavy lifting here.

<details>
  <summary>Code example for modal: /@modal/[bookId]/page.tsx</summary>

  ```ts filename="page.tsx"
  import ModalContainer from '@/components/modal/container'

  export default async function BooksModal({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const { books } = useSanityContext()

    const book = books.filter(item => item.name === id)

    return (
      <ModalContainer>
        <div>
          <h1>{book.title}</h1>
          <desc>{book.desc}</desc>
        </div>
      </ModalContainer>
    );
  }
  ```
</details>
<br>
<details>
  <summary>Code example for page: /books/[bookId]/page.tsx</summary>

  ```ts filename="page.tsx"
  export default async function BooksPage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const { books } = useSanityContext()

    const book = books.filter(item => item.name === id)

    return (
      <div>
        <h1>{book.title}</h1>
        <desc>{book.desc}</desc>
      </div>
    );
  }
  ```
</details><br>

In this example we could move most of the content inside `BooksPage` and `BooksModal` into its own component for reusability. But if we want different layout or flows then its simpler to just write seperate files for simplicity.<br><br>

## Blocking unindended access
It's best practice to also limit or block access to paths that are not intended to be used when you're using parallel/intersecting paths. This can be done by adding components that return `null` or `false`. In our previous example they would have stopped access to <a href="">www.teamwork.no/books/somethinginvalid</a>.
If you want to know more you can read more about [navigation states](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#active-state-and-navigation) safeguards.

<details>
  <summary>Code example: /@modal/default.tsx</summary>

  ```ts filename="page.tsx"
  export default function Default() {
    return null;
  }
  ```
</details>
<br><br>

## Final project tree
When we have added all the required files we should end up with a project that contains at least these files.
```
app/
├─ components/
│  ├─ modal/
│  │  ├─ container.tsx    <- Our modal wrapper
├─ @modal/
│  ├─ default.tsx         <- React component that returns null (safeguard).
|  ├─ [bookId]/
│  │  ├─ (.)books/        <- Must start with (.) and then the same folder name as our page.
│  │  │  ├─ page.tsx      <- Place dynamic content inside here that you want to render inside Modal component
├─ books/
│  ├─ [bookId]/
│  │  ├─ page.tsx         <- Place dynamic content inside here that will show on a full page
├─ layout.tsx
├─ page.tsx
```
<br><br>

## Help, I'm getting errors
- `Application error: a client-side exception has occurred (see the browser console for more information).`

This problem occours because `.next` folder contains old cached data. If you delete this folder it will be rebuilt next time you run `npm run dev`

## You suck at explaining
Here, Kyle is much better at explaining than I am. click to watch this youtube video instead

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/zDZBKEvU8b0/0.jpg)](https://www.youtube.com/watch?v=zDZBKEvU8b0)