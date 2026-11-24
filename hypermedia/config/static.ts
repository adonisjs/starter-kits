import { defineConfig } from '@adonisjs/static'

/**
 * Configuration options to tweak the static files middleware.
 * The complete set of options are documented on the
 * official documentation website.
 *
 * https://docs.adonisjs.com/guides/basics/static-file-server
 */
const staticServerConfig = defineConfig({
  /**
   * Enable or disable the static file server middleware.
   */
  enabled: true,

  /**
   * URL paths to look up in the "public" directory. Any other request
   * skips the filesystem and goes to your routes. Add the path of each
   * file or folder that you put in the "public" directory.
   */
  prefixes: ['/assets', '/favicon.ico', '/robots.txt'],

  /**
   * Enable ETag headers for static files.
   * ETags help browsers cache files efficiently by comparing
   * file versions without re-downloading unchanged files.
   */
  etag: true,

  /**
   * Include Last-Modified headers in responses.
   * Allows browsers to use conditional requests for better caching.
   */
  lastModified: true,

  /**
   * How to handle dotfiles (files starting with .).
   * Ignore dotfiles and respond as if they do not exist (ignore/404).
   * Serve dotfiles normally with the allow mode.
   * Reject access to dotfiles with deny mode (403).
   */
  dotFiles: 'ignore',
})

export default staticServerConfig
