FROM php:8.2

RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg-dev \
    libonig-dev \
    libxml2-dev \
    zip unzip curl git nano libzip-dev libpq-dev \
    && docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

COPY . .

RUN composer install

CMD ["bash", "-c", "php artisan serve --host=0.0.0.0 --port=8000"]
# CMD ["bash", "-c", "composer install && php artisan serve --host=0.0.0.0 --port=8000"]

EXPOSE 8000