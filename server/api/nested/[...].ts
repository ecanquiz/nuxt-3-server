const router = createRouter()

router.get('/test', defineEventHandler((event) => {
    return 'Test nested route.'
}))

export default useBase('/api/nested', router.handler)