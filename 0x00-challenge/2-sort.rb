###
# Sort integer arguments in ascending order
###

res = []
ARGV.each do |arg|
    # skip if not integer
    next if arg !~ /^-?[0-9]+$/

    # convert to integer
    i_arg = arg.to_i

    # insert res at the right position
    inputted = false
    i = 0
    l = res.size
    while !inputted && i < l do
        if res[i] < i_arg
            i += 1
        else
            res.insert(i, i_arg)
            inputted = true
            break
        end
    end
    res << i_arg if !inputted
end

puts res
