# Parallel-routes and interception
In this document I'll show you how you can create your own modals. I highly recommend that you read the documentation for [parallel-routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals) and [intercepting-routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes) before continuing. A minimal example can be found [@nextgram](https://github.com/vercel/nextgram) template from vercel

# Basics
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
</details><br>

afterwards we can create a portal target in our base `layout.tsx` file
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
</details>