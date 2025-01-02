'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { FaRegWindowClose } from 'react-icons/fa';

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
        <button onClick={onDismiss} className="absolute top-2 right-2 text-teamwork-primary-orange hover:text-teamwork-primary-orange/70">
          <FaRegWindowClose className='h-8 w-8 hover:scale-105' />
        </button>
      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
}