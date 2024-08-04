<?php

namespace App\Notifications;

use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SendCustomerMailNotification extends Notification
{
    use Queueable;

    private Order $order;
    /**
     * Create a new notification instance.
     */
    public function __construct(Order $order)
    {
        $this->order = $order;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
                    ->line('Commande n°'.$this->order->id . ' est confirmée.')
                    ->line('Merci pour votre commande !')
                    ->line('Veillez procéder au paiement de votre commande.')
                    ->attach(public_path($this->order->facture), [
                        'mime' => 'application/pdf',
                        'as' => 'facture.pdf',
                        'disposition' => 'attachment'
                    ])
                    ->line('Merci d\'avoir choisi notre application !');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }

}
