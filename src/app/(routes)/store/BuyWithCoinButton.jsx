"use client"
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useCoins } from "@/hooks/useCoins";
import { useSession } from "next-auth/react";
import Image from 'next/image';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';

const BuyWithCoinButton = ({ book }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const session = useSession();
    const user = session.data?.user;
    const { remainingCoins, addCoin } = useCoins(user?.id);
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    const purchaseMutation = useMutation(
        (purchaseData) => axiosSecure.post('/userPurchasedBooks', purchaseData),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('userPurchasedBooks');
                toast.success('Book purchased successfully!', {id: 'book_purchase'});
            },
            onError: (error) => {
                toast.error('Failed to purchase the book. Please try again.', {id: 'book_purchase'});
            }
        }
    );

    const handleCoinDeduction = async () => {
        if (remainingCoins < book.coin) {
            toast.error('Insufficient balance. Please add more coins.');
            return;
        }
        toast.loading('Purchasing book...', {id: 'book_purchase'});

        await addCoin({
            type: 'deduction',
            reason: 'For purchasing a book',
            value: book.coin,
            userId: user.id,
        });

        purchaseMutation.mutate({ userId: user.id, bookId: book.id });
        setIsDialogOpen(false);
    };

    return (
        <div>
            <Button
                 className="w-full mt-1 flex gap-1" 
                variant="outline" 
                onClick={() => setIsDialogOpen(true)}
            >
                <span>Buy with {book.coin}</span> 
                <Image height={15} width={15} src='/bcoin.png' alt='coin'/>
            </Button>

            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Confirm Purchase</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to purchase "{book.title}" for {book.coin} coins?
                            {errorMessage && (
                                <p className="text-red-500 mt-2">{errorMessage}</p>
                            )}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleCoinDeduction}>Confirm</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default BuyWithCoinButton;