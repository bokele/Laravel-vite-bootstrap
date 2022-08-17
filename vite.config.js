import { defineConfig } from 'vite';
import laravel, { refreshPaths } from 'laravel-vite-plugin';
import {resolve} from 'path'

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                "resources/sass/dashboard/dashboard.scss",
                'resources/js/app.js',
                'resources/js/dashboard.js'
            ],
            refresh: [
                ...refreshPaths,
                'app/Http/Livewire/**',
            ],
        }),
    ],
});
