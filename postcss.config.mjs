/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {}
  }
};

export default config;

/**
 * if you are having timeout when installing new shadcnui components, check these links:
 * https://github.com/shadcn-ui/ui/issues/1371
 * https://askubuntu.com/questions/583797/how-to-set-a-proxy-for-terminal
 *
 * i've set shadcn proxy:
 * export http_proxy='http://ui.shadcn.com'
 * export https_proxy='https://ui.shadcn.com'
 *
 * then i've just unset them:
 * unset http_proxy
 * unset https_proxy
 *
 * and then I could ge my component installed:
 * npx shadcn-ui@latest add drawer
 */
