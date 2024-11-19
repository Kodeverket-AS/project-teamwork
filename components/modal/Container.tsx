'use client';

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
    <div className="fixed inset-0 backdrop-blur-[4px] backdrop-brightness-75">
      <dialog ref={dialogRef} className="rounded-lg p-8" onClose={onDismiss}>
        {children}
        <button onClick={onDismiss} className="absolute top-4 right-4 w-12 h-12 bg-teamwork-primary-orange" />
      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
}